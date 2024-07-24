

export default function CoreConcept (props){ // {image,title,description} bu sekilde destructuring yaparak asagida direkt image, title, description yazabiliriz kisa yol.

return(
  <li>
  <img src={props.image}alt={props.title} />
  <h3>{props.title}</h3>
  <p>{props.description}</p>

  </li>
)

}
