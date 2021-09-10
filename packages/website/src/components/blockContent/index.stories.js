import React from 'react';

import { BlockContent } from '.';

export default {
  component: BlockContent,
  title: 'components/blockContent',
};

const Template = (args) => <BlockContent {...args} />;

export const Primary = Template.bind({});
export const WhiteText = Template.bind({});
export const NoStyle = Template.bind({});

const blocks = [
  {
    _key: '273b9d112fc9',
    _type: 'block',
    children: [
      {
        _key: 'bcd4b4e93bdd',
        _type: 'span',
        marks: [],
        text:
          'Alv er produktet av alle konsulentene som jobber i selskapet. Dyktige konsulenter gjør Alv til et bra produkt. En dyktig konsulent er en konsulent som er mer en bare faglig sterk.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
  {
    _key: 'a385d7919d99',
    _type: 'block',
    children: [
      {
        _key: 'c9ada2f5ca870',
        _type: 'span',
        marks: [],
        text:
          'I Alv har vi tro på at dyktige konsulenter er de som hele tiden ønsker å utvikle seg selv, og de rundt seg. Dette er grunnpilarene for hvordan vi bygger Alv. Følg gjerne videoserien vår for å få et bedre innblikk i hvordan vi bygger Alv som selskap.',
      },
    ],
    markDefs: [],
    style: 'normal',
  },
];

Primary.args = {
  blocks,
  whiteText: false,
  noStyle: false,
};

WhiteText.args = {
  blocks,
  whiteText: true,
  noStyle: false,
};

NoStyle.args = {
  blocks,
  whiteText: false,
  noStyle: true,
};
