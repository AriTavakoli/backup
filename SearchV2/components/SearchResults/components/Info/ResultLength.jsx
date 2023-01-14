import './resultLength.css'


export default function ResultLength({ length }) {


  return (
    <div className="result-length-container">
      <div className="result-length-text">
        {length} out of {length} results


      </div>
    </div>

  )

}