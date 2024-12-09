import axiosInstance from '../axiosInstance';

export const createShippingComp = async (data) => {
  const response = await axiosInstance.post('/finance/shippingComps', {
    name: data.name,
  });
  return response.data;
};

export const updateShippingComp = async ({ id, name }) => {
  const response = await axiosInstance.put(`/finance/shippingComps/${id}`, {
    name,
  });
  return response.data;
};

export const fetchShippingComps = async () => {
  const response = await axiosInstance.get('/finance/shippingComps');
  return response.data;
};
