import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';


import Value from '../../components/StandardInput/Pure/Value/index';
import EditButton from '../../components/StandardInput/Pure/EditButton/index';
import Title from '../../components/StandardInput/Pure/Title/index';
import SetValueButton from '../../components/StandardInput/Pure/SetValueButton/index';
import InputField from '../../components/StandardInput/Pure/InputField/index';
import StandardInput from '../../components/StandardInput/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

  storiesOf('StandardInput', module)
  .add('Value', () => (<Value
    inputValue="show value"
  />))
  .add('Title', () => (<Title
    titleText="title"
  />))
  .add('EditButton', () => (<EditButton
    clickHandler={() => console.log('clicked')}
  />))
  .add('SetValueButton', () => (<SetValueButton
    clickHandler={() => console.log('clicked')}
  />))
  .add('InputHandler', () => (<InputField
    changeHandler={(e) => console.log(e.target.value)}
    submitHandler={(e) => {
      e.preventDefault();
      console.log('submit triggered');
    }
    }
    placeholderText="placeholder"
    value="Initial Value"
  />))
  .add('StandardInput', () => (<StandardInput
    fieldName="currency"
    initialFieldValue="USD"
    placeholderText="Set Currency"
  />));
