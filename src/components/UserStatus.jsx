function UserStatus({ loading, error, count }) {
  if (loading)
    return (
      <p className="products-status text-secondary" role="status">
        Cargando productos...
      </p>
    );
  if (error)
    return (
      <p className="products-status text-warning" role="alert">
        No fue posible cargar los productos.
      </p>
    );
  return (
    <p className="products-status text-success" role="status">
      {count} productos cargados correctamente.
    </p>
  );
}

export default UserStatus;
