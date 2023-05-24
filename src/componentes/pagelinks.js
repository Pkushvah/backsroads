import { pageLinks } from "./data";
import Pagelink from './pagelink';
const pagelinks = ({parentClass,itemClass}) => {
  return (
      <ul className={parentClass} id="nav-links">
          {pageLinks.map((link)=>{
          
            return(
              <Pagelink key={link.id} {...link} itemClass={itemClass}/>
            )

          })}
          </ul>
  )
}
export default pagelinks