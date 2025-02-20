import React from 'react';
import { render, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';
import App from '../App';

describe('<NumberOfEvents /> component', () => {
  let NumberOfEventsComponent;
  beforeEach(() => {
    NumberOfEventsComponent = render(<NumberOfEvents setCurrentNOE={() => { }} />);
  });

  test('renders number of events text input', () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass('number-of-events-input');
  });

  test('default number is 32', async () => {
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    expect(numberTextBox).toHaveValue("32");
  });

  test('number of events text box value changes when the user types in it', async () => {
    const user = userEvent.setup();
    const numberTextBox = NumberOfEventsComponent.queryByRole('textbox');
    await user.type(numberTextBox, "123")

    // 32 (the default value already written) + 123
    expect(numberTextBox).toHaveValue("32123");
  });
});

describe("Changing the number of events updates the event list", () => {
  test("User can change the number of events they want to see", async () => {
    const { container } = render(<App />);
    
    const user = userEvent.setup();
    const NumberOfEventsDOM = container.querySelector('#number-of-events');
    const numberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');
    await user.clear(numberOfEventsInput);
    await user.type(numberOfEventsInput, "20");
    expect(numberOfEventsInput.value).toBe("20");
    
    const EventListDOM = container.querySelector('#event-list');
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole('listitem');
      expect(EventListItems.length).toBe(20);
    });
  });
});