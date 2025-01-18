const StatsCard = ({ icon, title, text, color }) => {
  return (
    <div className="col">
      <div className="card h-100 text-center shadow">
        <div className="card-body">
          <div className={`display-4 ${color} mb-2`}>
            <i className={`bi ${icon}`}></i>
          </div>
          <h2 className="card-title mb-3">{title}</h2>
          <p className="card-text text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
};

const MetricSection = () => {
  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-md-4 g-4">
        <StatsCard 
          icon="bi-people" 
          title="1,234" 
          text="Active Users" 
          color="text-primary" 
        />
        <StatsCard 
          icon="bi-graph-up" 
          title="56%" 
          text="Growth Rate" 
          color="text-success" 
        />
        <StatsCard 
          icon="bi-star" 
          title="4.8" 
          text="Average Rating" 
          color="text-warning" 
        />
        <StatsCard 
          icon="bi-clock-history" 
          title="98.3%" 
          text="Uptime" 
          color="text-danger" 
        />
      </div>
    </div>
  );
};

export default MetricSection;