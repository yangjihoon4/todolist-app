import { addSection, deleteSection } from './actions';

const initialState = {
  sections: [],
};

export const sections = (state = initialState, action) => {
  if (action.type === addSection) {
    return {
      // 만약 다른 state 가 존재한다면 전개 연산 ...state 를 해야함
      // 하지만 현재 state 에는 sections 하나 뿐이라 sections 만 반환하면 됨
      sections: [...state.sections, action.section],
    };
  } else if (action.type === deleteSection) {
    return {
      sections: [...state.sections.filter(section => section.id !== action.id)],
    };
  } else {
    return state;
  }
};
