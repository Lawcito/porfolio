function CustomBtn({ text, type, onClick,  primary, carousel }) {
  const styles = {
    primary:
      "bg-[#44355B] border-md border-2 border-[#ED7F27] hover:bg-[#31263E] hover:border-[#EE5622] text-[#ED7F27] hover:text-[#EE5622] text-font-serif",
    error: "bg-red-500 rounded-lg",
    carousel: "bg-[#ECA72C] border-2 border-[#EE5622] rounded-full text-font-serif text-[#221E22]",
  };

  return (
    <button
      type={type}
      onClick = {onClick}
      className={`btn ${
        primary ? styles.primary : carousel ? styles.carousel : "bg-gray-300"
      }`}
    >
      {text}
     
    </button>
  );
}

export default CustomBtn;
