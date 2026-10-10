function Counter({ count }) {
  return (
    <span
      className="badge text-bg-warning"
      aria-label={`${count} productos en el carrito`}
    >
      {count}
    </span>
  );
}

export default Counter;
