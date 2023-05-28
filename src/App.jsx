import "./App.css";
import EmptyState from "./components/EmptyState";
import SelectionBar from "./components/SelectionBar";
import { useCurrentPhoto } from "./context/Context";
function App() {
  const { currentPhoto } = useCurrentPhoto();
  console.log(currentPhoto);
  return (
    <div className='h-screen w-full flex items-center'>
      <div className='h-[60vh]  w-full p-2 flex items-center justify-center'>
        {Object.keys(currentPhoto).length !== 0 ? (
          <img className='rounded' src={currentPhoto.url} alt='' />
        ) : (
          <EmptyState />
        )}
      </div>
      <SelectionBar />
    </div>
  );
}
export default App;
