function Stars() {
  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <div className="absolute w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl top-[-200px] left-[-200px]" />
      <div className="absolute w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl bottom-[-200px] right-[-200px]" />
    </div>
  );
}

export default Stars;
