import React from "react";
import { shallow } from 'enzyme'
import App from "components/App";
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows comment list', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});

// find returns array of instances of the specified element
