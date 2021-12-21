import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() =>{
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
  expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' } //(event) passed to handlleChange
    });
    wrapped.update(); //forcing the component to rerender
  });

  it('has a text area that a user can type in', () => {
    // check that the value of textarea is updated
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });

  it('clears form on submit', () => {
    //submit form
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
})

// can also use shallow method here
// mount function is the full DOM function

// .simulate(event[, mock]) => self
  // event (string)- event to be simulated
  // mock (object [optional]) - mock event object will be
  // merged with the event object passed to handlers  

// change and submit are normal html events