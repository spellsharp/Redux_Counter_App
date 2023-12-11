import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../state/store";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "../state/counter/counterSlice";
import { updateValue } from "../state/inputBox/inputBoxSlice";
import { updateToast } from "../state/toastDisplay/toastDisplaySlice";
const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector((state: RootState) => state.inputBox.value);
  const upperLimitReached = useSelector((state: RootState) => state.counter.upperLimitReached);
  const lowerLimitReached = useSelector((state: RootState) => state.counter.lowerLimitReached); 
  const toastColor = useSelector((state: RootState) =>  state.toastDisplay.color);
  let shouldDisplay = false;
  if (upperLimitReached) {
    dispatch(updateToast({
      message: "Upper limit reached!",
      color: "red"
    }))
    shouldDisplay = true;
  }
  if (lowerLimitReached) {
    dispatch(updateToast(
      {
        message: "Lower limit reached!",
        color: "red"
      }
    ))
    shouldDisplay = true;
  }
  const toastMessage = useSelector((state: RootState) => state.toastDisplay.message);

  return (
    <>
      <div>
        <header className="text-3xl text-center">Counter</header>
        {
          shouldDisplay ? (
            <div className={`bg-${toastColor}-500 text-white text-center p-2`}>
              {toastMessage}
            </div>
          ) : null
        }
        <div className="flex flex-col">
          <div className="mx-auto">
            <p className="text-5xl text-center">{count}</p>
            <div className="space-x-2 flex justify-center">
              <button
                className="border border-black p-2 rounded-3xl"
                onClick={() => dispatch(increment())}
              >
                Increment
              </button>
              <button
                className="border border-black p-2 rounded-3xl"
                onClick={() => dispatch(decrement())}
              >
                Decrement
              </button>
            </div>
            <form className="mt-5 flex flex-col max-w-xl mx-auto space-y-10">
              <input
                type="number"
                className="border border-black rounded-2xl p-3"
                placeholder="Enter a number"
                onChange={(e) => dispatch(updateValue(Number(e.target.value)))}
              />
              <div className="flex justify-center space-x-2">
                <button
                  type="button"
                  className="p-2 border border-black rounded-2xl hover:border-blue-700 hover:text-blue-700"
                  onClick={() => dispatch(incrementByAmount(value))}
                >
                  Add Amount
                </button>
                <button
                  className="p-2 border border-black rounded-2xl hover:border-blue-700 hover:text-blue-700"
                  type="button"
                  onClick={() => dispatch(decrementByAmount(value))}
                >
                  Subtract Amount
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
