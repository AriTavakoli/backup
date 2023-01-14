import Skeleton from 'react-loading-skeleton';
import '../../../Dropdown.css';
import "react-loading-skeleton/dist/skeleton.css";

export default function SkeletonRow({ index, currentRowIndex, setCurrentRow, className, loading }) {
  return (
    <>
      <Skeleton className="dropdown-row-skeleton" baseColor="#202020" inline="false" highlightColor="#444" width="100%" height="80px" >

        <div className='dropdown-row'>
          <div className="dropdown-item">  {className}</div>
        </div>

      </Skeleton>
      <div className='result-item-divider'> </div>

    </>
  )
}