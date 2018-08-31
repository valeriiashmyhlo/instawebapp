// import { Component, ReactNode } from 'react';
// import { connect } from 'react-redux';
// import { fetchData } from '../features/graphql/actions';

// type Props = {
//   children: ({ data: object }) => ReactNode,
//   query: string,
//   fetchData: (query) => ({}),
//   data: any
// }

// class Query extends Component<Props> {
//   componentDidMount() {
//     this.props.fetchData(this.props.query);
//   }

//   render() {
//     return this.props.children({ data: null });
//   }
// }

// export default connect((state, props) => ({
//   data: state.graphql.data[props.query.loc.source.body]
// }), { fetchData })(Query);
