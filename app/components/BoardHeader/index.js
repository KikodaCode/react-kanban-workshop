/**
 *
 * BoardHeader
 *
 */

import React from 'react';

import Board from 'components/Board';
import Column from 'components/Column';

import octopusGif from 'images/octopus.gif';
import titleGif from 'images/title.gif';

const BoardHeader = () => (
  <Board>
    <Column>
      <img src={octopusGif} width="100%" alt="Octopus" />
    </Column>
    <Column>
      <img src={octopusGif} width="100%" alt="Octopus" />
    </Column>
    <Column>
      <img src={octopusGif} width="100%" alt="Octopus" />
    </Column>
    <Column>
      <img src={titleGif} width="100%" alt="React Kanban" />
    </Column>
    <Column>
      <img src={octopusGif} width="100%" alt="Octopus" />
    </Column>
    <Column>
      <img src={octopusGif} width="100%" alt="Octopus" />
    </Column>
    <Column>
      <img src={octopusGif} width="100%" alt="Octopus" />
    </Column>
  </Board>
);

export default BoardHeader;
