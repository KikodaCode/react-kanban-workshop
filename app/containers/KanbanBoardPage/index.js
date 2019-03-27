/**
 *
 * KanbanBoardPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Container from 'components/Container';
import BoardHeader from 'components/BoardHeader';
import Board from 'components/Board';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import columnTypes from 'propTypes/column';
import * as selectors from './selectors';
import reducer from './reducer';
import saga from './saga';
import KanbanColumn from './KanbanColumn';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class KanbanBoardPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(actions.kanbanBoardLoad());
  }

  render() {
    const { columns } = this.props;
    return (
      <Container>
        <BoardHeader />
        <Board>
          {columns.map(column => (
            <KanbanColumn key={column.name} column={column} />
          ))}
        </Board>
      </Container>
    );
  }
}

KanbanBoardPage.propTypes = {
  columns: PropTypes.arrayOf(columnTypes).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  columns: selectors.columnsSelector,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'kanbanBoardPage', reducer });
const withSaga = injectSaga({ key: 'kanbanBoardPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(KanbanBoardPage);
