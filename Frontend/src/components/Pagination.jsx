const Pagination = ({ page, totalPages, onPrev, onNext }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <button disabled={page === 1} onClick={onPrev}>
        Prev
      </button>

      <span style={{ margin: "0 1rem" }}>
        Page {page} of {totalPages}
      </span>

      <button disabled={page === totalPages} onClick={onNext}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
