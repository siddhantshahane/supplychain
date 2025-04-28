import { useEffect, useState } from 'react';
import { apiClient } from '@/lib/api';

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export default function InventoryList() {
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await apiClient.getInventory();
        setInventory(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch inventory');
        setLoading(false);
      }
    };

    fetchInventory();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Inventory List</h2>
      <div className="grid gap-4">
        {inventory.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 