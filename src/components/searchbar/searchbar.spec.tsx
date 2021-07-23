import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from '.';

describe('card component', () => {
  const onSearchMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should update value on input change', () => {
    const component = render(<SearchBar onSearch={onSearchMock} />);

    const inputEl = component.container.querySelector(
      '#search-input'
    ) as HTMLInputElement;

    expect(inputEl?.value).toBe('');

    fireEvent.change(inputEl, { target: { value: 'test          ' } });

    expect(inputEl?.value).toBe('test          ');
  });

  test('should emit event on search request via button', () => {
    const component = render(<SearchBar onSearch={onSearchMock} />);

    const inputEl = component.container.querySelector(
      '#search-input'
    ) as HTMLInputElement;

    fireEvent.change(inputEl, { target: { value: 'test          ' } });

    const buttonEl = component.container.querySelector(
        '#search-button'
      ) as HTMLButtonElement;

    fireEvent.click(buttonEl);

    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

  test('should emit event on search request via keypress', () => {
    const component = render(<SearchBar onSearch={onSearchMock} />);

    const inputEl = component.container.querySelector(
      '#search-input'
    ) as HTMLInputElement;

    fireEvent.change(inputEl, { target: { value: 'test          ' } });

    fireEvent.keyPress(inputEl, {
        key: 'A', keyCode: 65
    })

    expect(onSearchMock).not.toHaveBeenCalled();

    fireEvent.keyPress(inputEl, {
        key: 'Enter', keyCode: 13
    })

    expect(onSearchMock).toHaveBeenCalledWith('test');
  });

});
