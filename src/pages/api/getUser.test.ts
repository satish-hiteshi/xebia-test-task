import { jest } from '@jest/globals';
import { NextApiResponse } from 'next';
import handler, { SIMULATE_SLOW_REQUEST_TIMEOUT } from './getUser';
import userMock from '../../../__mocks__/user.json';

// Mock NextApiResponse object
const mockResponse = (): NextApiResponse => {
  const res: Partial<NextApiResponse> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };
  return res as NextApiResponse;
};

describe('user', () => {
  beforeEach(() => {
    jest.useFakeTimers(); 
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers(); 
  });

  it('should return success with user data after a delay', async () => {
    const mockReq = {} as any; 
    const mockRes = mockResponse();

    const handlerPromise = handler(mockReq, mockRes);

    // Fast-forward time by SIMULATE_SLOW_REQUEST_TIMEOUT milliseconds
    jest.advanceTimersByTime(SIMULATE_SLOW_REQUEST_TIMEOUT);

    await handlerPromise;
    
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toHaveBeenCalledWith(userMock);
  });
});
