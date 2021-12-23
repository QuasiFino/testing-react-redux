import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
  }); //tricking axios on getting response
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', done => {
  // attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetch comments' buton and click it
  wrapped.find('.fetch-comments').simulate('click'); //fails

  // introduce a tiny little pause to cope with moxios
  // expect to find a list of comments, 500 Li's
  moxios.wait(() => {
    wrapped.update();
    
    expect(wrapped.find('li').length).toEqual(2);
    done(); //the test runs till this func is called
    wrapped.unmount();
  });
});

// integration test -  to test the etire application
// or a bigger part of the application in one go

// https://github.com/axios/moxios




