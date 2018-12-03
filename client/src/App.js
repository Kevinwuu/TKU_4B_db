// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import BootstrapTable from 'react-bootstrap-table-next';
// import axios from 'axios';

// class App extends Component {
//   state = {users: []}


//   componentDidMount() {
//     fetch('/users')
//       .then(res => res.json())
//       .then(users => this.setState({ users }));
//   }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Users</h1>
  //       {this.state.users.map(user =>
  //         <div key={user.id}>{user.username}</div>
  //       )}
  //     </div>
  //   );
  // }
// }




// export default App;

// App.js

// import React, { Component } from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
// import BootstrapTable from 'react-bootstrap-table-next';

// class App extends Component {
//   state = {
//     products: [
//       {
//         id: 1,
//         name: 'TV',
//         'price': 1000
//       },
//       {
//         id: 2,
//         name: 'Mobile',
//         'price': 500
//       },
//       {
//         id: 3,
//         name: 'Book',
//         'price': 20
//       },
//     ],
//     columns: [{
//       dataField: 'id',
//       text: 'Product ID'
//     },
//     {
//       dataField: 'name',
//       text: 'Product Name'
//     }, {
//       dataField: 'price',
//       text: 'Product Price',
//       sort: true
//     }]
//   }

//   render() {
//     return (
//       <div className="container" style={{ marginTop: 50 }}>
//         <BootstrapTable
//         striped
//         hover
//         keyField='id'
//         data={ this.state.products }
//         columns={ this.state.columns } />
//       </div>
//     );
//   }
// }

// export default App;




// App.js

import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from 'axios';

class App extends Component {
  state = {
    products: [],
    columns: [{
      dataField: 'id',
      text: 'Product ID',
      sort: true

    },
    {
      dataField: 'name',
      text: 'Product Name',
      sort: true,
      filter: textFilter()
    }, {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }]
  }

  componentDidMount() {
    axios.get('http://localhost:4000/results')
      .then(response => {
        this.setState({
          products: response.data
        });
      });

  }

  render() {
    return (
      <div className="container" style={{ marginTop: 50 }}>
        <BootstrapTable
        striped
        hover
        keyField='id'
        data={ this.state.products }
        columns={ this.state.columns }
        filter={ filterFactory() }
        pagination={ paginationFactory() }/>
      </div>
    );
  }
}

export default App;
