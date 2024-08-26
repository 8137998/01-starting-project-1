import './CoreConcepts.css'

export default function CoreConcepts({image, alt, title, description}) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{description} </p>
    </li>
  );
}
