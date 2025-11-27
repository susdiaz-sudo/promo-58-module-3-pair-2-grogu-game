const Cupboard = ({ amount, children }) => {
  const cupboard = new Array(amount).fill(null);
  
  return <section className="goods-container">
   {cupboard.map((_, index) => (
        <div key={index} className="goods-item">
          {children}
        </div>
      ))}
  </section>;
};
export default Cupboard;
