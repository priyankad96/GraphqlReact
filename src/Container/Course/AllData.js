import React, {Component} from 'react';
import {Query} from "react-apollo";
import gql from 'graphql-tag';

class AllData extends Component {
    constructor() {
        super();
        this.state = {
            course: [],
        }
    }

    componentDidMount() {
        console.log(this.props.data);
        this.setState({course: this.props.data})
    }

    render() {
        const {course} = this.state;
        return (
            <div>
                <div style={{display:'flex',justifyContent:'center',alighItems:'center',margin:30}} className={'shadow-lg p-3 mb-5 bg-white rounded'}>
                    <table className="table table-striped">
                        <thead class="thead-dark">
                        <tr style={{textAlign:'center'}}>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">Topic</th>
                            <th scope="col">URL</th>
                            <th scope="col">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            course &&
                            course.map((item, i) => (
                                <tr key={i}>
                                    <th scope="row">{i + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.topic}</td>
                                    <td ><a href={item.url} target={'_blank'}><u>{item.url}</u></a></td>
                                    <td>
                                        <button type=" button" id={item.id} className=" btn btn-success"
                                                onClick={() => {
                                                    this.update(item.id)
                                                }}>Edit
                                        </button>
                                        {' '}
                                        <button type=" button" id={item.id} className=" btn btn-danger"
                                                onClick={()=>{this.delete(item.id)}}>Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                    {
                        !course &&
                        <div style={{textAlign:'center'}}>
                            <h1>No Records Found..</h1>
                        </div>
                    }
            </div>
        );
    }
}

export default AllData;