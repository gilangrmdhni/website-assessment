import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { createShippingComp, updateShippingComp, deleteShippingComp, fetchShippingComps } from '../api/shippingCompsApi';
import { useForm } from 'react-hook-form';

function ShippingComps() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery('shippingComps', fetchShippingComps);
  const [editComp, setEditComp] = useState(null);
  const { register, handleSubmit, setValue, reset } = useForm();

  const createMutation = useMutation(createShippingComp, {
    onSuccess: () => {
      queryClient.invalidateQueries('shippingComps');
      reset();
    },
  });

  const updateMutation = useMutation(updateShippingComp, {
    onSuccess: () => {
      queryClient.invalidateQueries('shippingComps');
      setEditComp(null);
      reset();
    },
  });

  const onSubmit = (data) => {
    if (editComp) {
      updateMutation.mutate({ id: editComp.id, name: data.name });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (comp) => {
    setEditComp(comp);
    setValue('name', comp.name);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Shipping Comps</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-4">
        <input
          {...register('name', { required: "Name is required" })}
          placeholder="Shipping Comp Name"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          {editComp ? 'Update' : 'Add'}
        </button>
      </form>

      <ul>
        {data.map(comp => (
          <li key={comp.id} className="flex justify-between items-center p-2 border-b border-gray-300">
            <span>{comp.name}</span>
            <div>
              <button onClick={() => handleEdit(comp)} className="mr-2 p-2 bg-yellow-500 text-white rounded">Edit</button>
              {/* Hapus function untuk delete */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShippingComps;
