export const mockResponse = {
  job_id: 'job_id',
};

export const mockSetApiKey = jest.fn();
export const mockRequest = jest.fn().mockReturnValue(Promise.resolve(mockResponse));

export const mockClient = {
  setApiKey: mockSetApiKey,
  request: mockRequest,
};

export const Client = jest.fn().mockReturnValue(mockClient);
