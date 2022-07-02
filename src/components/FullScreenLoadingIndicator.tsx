import spinner from '../assets/spinner.svg';
import '../styles/FullScreenLoadingIndicator.css';

export default function FullScreenLoadingIndicator() {
  return (
    <div className="FullScreenLoadingIndicator">
      <img style={{ height: '24px' }} src={spinner} alt="spinner"></img>
    </div>
  );
};
