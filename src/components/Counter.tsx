import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";

import actions from "../actions";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();
  const value = useSelector(
    (state: RootState) => state.updateNumericalValue.value
  );
  const upperLimitReached = useSelector(
    (state: RootState) => state.counter.upperLimitReached
  );
  const lowerLimitReached = useSelector(
    (state: RootState) => state.counter.lowerLimitReached
  );
  const toastType = useSelector((state: RootState) => state.toast.type);
  var toastColor = useSelector((state: RootState) => state.toast.color);

  const displayToast = useSelector((state: RootState) => state.toast.display);

  useEffect(() => {

    if (upperLimitReached) {
      dispatch(
        actions.toastActions.updateToast({
          message: "Upper limit reached!",
          type: "error",
          color: "red",
          display: true,
        })
      );
    } else if (!upperLimitReached && !lowerLimitReached) {
      dispatch(
        actions.toastActions.updateToast({
          display: false,
        })
      );
    }

    if (lowerLimitReached) {
      dispatch(
        actions.toastActions.updateToast({
          message: "Lower limit reached!",
          type: "error",
          color: "red",
          display: true,
        })
      );
    } else if (!lowerLimitReached && !upperLimitReached) {
      dispatch(
        actions.toastActions.updateToast({
          display: false,
        })
      );
    }
  }, [count, upperLimitReached, lowerLimitReached, dispatch]);

  const toastMessage = useSelector((state: RootState) => state.toast.message);

  const handleCloseToast = () => {
    dispatch(actions.toastActions.updateToast({ display: false }));
    dispatch(actions.counterActions.updateUpperLimitReached(false));
    dispatch(actions.counterActions.updateLowerLimitReached(false));
  };

  return (
    <>
      <div>
        <header className="text-3xl text-center">Counter</header>
        {displayToast ? (
          <div
            className={`bg-${toastColor}-500 flex justify-center text-black`}
          >
            <div className={`text-center p-2`}>{toastMessage}</div>
            <button onClick={() => handleCloseToast()}>x</button>
          </div>
        ) : null}
        <div className="flex flex-col">
          <div className="mx-auto">
            <p className="text-5xl text-center">{count}</p>
            <div className="space-x-2 flex justify-center">
              <button
                className="border border-black p-5 rounded-3xl"
                onClick={() => dispatch(actions.counterActions.increment())}
              >
                Increment
              </button>
              <button
                className="border border-black p-2 rounded-3xl"
                onClick={() => dispatch(actions.counterActions.decrement())}
              >
                Decrement
              </button>
            </div>
            <form className="mt-5 flex flex-col max-w-xl mx-auto space-y-10">
              <input
                type="number"
                className="border border-black rounded-2xl p-3"
                placeholder="Enter a number"
                onChange={(e) =>
                  dispatch(
                    actions.updateNumericalValueActions.updateNumericalValue(
                      Number(e.target.value)
                    )
                  )
                }
              />
              <div className="flex justify-center space-x-2">
                <button
                  type="button"
                  className="p-2 border border-black rounded-2xl hover:border-blue-700 hover:text-blue-700"
                  onClick={() =>
                    value === 0
                      ? dispatch(
                          actions.toastActions.updateToast({
                            display: true,
                            message: "Please enter a number",
                            type: "warning",
                            color: "yellow",
                          })
                        )
                      : dispatch(actions.counterActions.incrementByValue(value))
                  }
                >
                  Add Amount
                </button>
                <button
                  className="p-2 border border-black rounded-2xl hover:border-blue-700 hover:text-blue-700"
                  type="button"
                  onClick={() =>
                    value === 0
                      ? dispatch(
                          actions.toastActions.updateToast({
                            display: true,
                            message: "Please enter a number",
                            type: "warning",
                            color: "yellow",
                          })
                        )
                      : dispatch(actions.counterActions.decrementByValue(value))
                  }
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
