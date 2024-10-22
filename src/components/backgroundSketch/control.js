// MIT License
// Copyright © 2023 Zaron
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

const LOOP_TOGGLE = {
  STATE: true,
  BY_CLICK: false,
  BY_PRESS: false,
  BUTTON: " ",
  p5: null,
  updateState: () => {
    LOOP_TOGGLE.STATE = !LOOP_TOGGLE.STATE;
  },
  toggle: () => {
    if (LOOP_TOGGLE.p5) {
      LOOP_TOGGLE.p5[LOOP_TOGGLE.STATE ? "loop" : "noLoop"]();
    } else {
      LOOP_TOGGLE.STATE ? loop() : noLoop();
    }
  },
};

const CLICK_TOGGLE_LIST = [];
const PRESS_TOGGLE_LIST = [];
const createToggle = (_btn, _func1, _func1Args = [], _func2, _func2Args = []) => {
  let state = true;
  const updateState = () => (state = !state);
  const toggle = () => {
    if (state) _func1(..._func1Args);
    else _func2(..._func2Args);
  };
  return { btn: _btn, updateState, toggle };
};

const CLICK_DO_LIST = [];
const PRESS_DO_LIST = [];
const createDo = (_btn, _func, _args = []) => {
  const run = () => {
    _func(..._args);
  };
  return { btn: _btn, run };
};

const ClickLoopToggle = (_p5 = null) => {
  LOOP_TOGGLE.BY_CLICK = true;
  LOOP_TOGGLE.p5 = _p5;
};
const ClickToggle = (_func1, _func2, _func1Args = [], _func2Args = []) => {
  CLICK_TOGGLE_LIST.push(createToggle("CLICK", _func1, _func1Args, _func2, _func2Args));
};
const ClickDo = (_func, _args = []) => {
  CLICK_DO_LIST.push(createDo("CLICK", _func, _args));
};
document.addEventListener("mousedown", () => {
  if (LOOP_TOGGLE.BY_CLICK) {
    LOOP_TOGGLE.updateState();
    LOOP_TOGGLE.toggle();
  }
  CLICK_TOGGLE_LIST.forEach((toggle) => {
    toggle.updateState();
    toggle.toggle();
  });
  CLICK_DO_LIST.forEach((item) => {
    item.run();
  });
});

const PressLoopToggle = (_btn, _p5 = null) => {
  LOOP_TOGGLE.BY_PRESS = true;
  LOOP_TOGGLE.BUTTON = _btn;
  LOOP_TOGGLE.p5 = _p5;
};
const PressToggle = (_btn, _func1, _func2, _func1Args = [], _func2Args = []) => {
  PRESS_TOGGLE_LIST.push(createToggle(_btn, _func1, _func1Args, _func2, _func2Args));
};
const PressDo = (_btn, _func, _args = []) => {
  PRESS_DO_LIST.push(createDo(_btn, _func, _args));
};
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (key === LOOP_TOGGLE.BUTTON) {
    if (LOOP_TOGGLE.BY_PRESS) {
      LOOP_TOGGLE.updateState();
      LOOP_TOGGLE.toggle();
    }
  }
  PRESS_TOGGLE_LIST.forEach((toggle) => {
    if (key === toggle.btn) {
      toggle.updateState();
      toggle.toggle();
    }
  });
  PRESS_DO_LIST.forEach((item) => {
    if (key === item.btn) item.run();
  });
});
