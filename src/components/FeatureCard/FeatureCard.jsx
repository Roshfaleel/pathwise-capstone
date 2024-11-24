import './FeatureCard.scss'

function FeatureCard({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="features__card">
      <img className="features__img" src={imgSrc} alt={imgAlt} />
      <div className="features__card-content">
        <h4 className="features__card-title">{title}</h4>
        <p className="features__card-content">{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard
