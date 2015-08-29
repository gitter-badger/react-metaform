import componentFactory from './ComponentFactory.js';

import TextBox from '../components/editors/TextBox';
import Label from '../components/editors/Label.js';
import CheckBox from '../components/editors/CheckBox.js';
import Select from '../components/editors/Select.js';
import Lookup from '../components/editors/Lookup.js';
import DatePicker from '../components/editors/DatePicker.js';
import CodeEditor from '../components/editors/CodeEditor.js';

// Registers all component definitions
componentFactory.registerComponent('textbox', ['string', 'int', 'float'], TextBox);
componentFactory.registerComponent('label', ['string', 'int', 'float'], Label);
componentFactory.registerComponent('select', ['string', 'int', 'float'], Select);
componentFactory.registerComponent('lookup', ['string', 'int', 'float'], Lookup);
componentFactory.registerComponent('checkbox', ['bool'], CheckBox);
componentFactory.registerComponent('datepicker', ['bool'], DatePicker);
componentFactory.registerComponent('codeeditor', ['bool'], CodeEditor);

// Registers the component defaults
componentFactory.setDefaultComponents({
    "string": 'textbox',
    "int": 'textbox',
    "float": 'textbox',
    "bool": 'checkbox',
    "date": 'datepicker'
});

export default componentFactory;