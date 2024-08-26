function CustomBtn({ text, type, primary, error }) {
  const styles = {
    primary:
      "bg-[#44355B] border-md border-2 border-[#ED7F27] hover:bg-[#31263E] hover:border-[#EE5622] text-[#ED7F27] hover:text-[#EE5622] text-font-serif",
    error: "bg-red-500 rounded-lg",
  };

  return (
    <button
      type={type}
      className={`btn ${
        primary ? styles.primary : error ? styles.error : "bg-gray-300"
      }`}
    >
      {text}
    </button>
  );
}

export default CustomBtn;
