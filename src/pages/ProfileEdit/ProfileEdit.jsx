import React, { Component } from 'react'
import * as profilesAPI from '../../services/profileService'


class ProfileEdit extends Component {
  state = {
    name: '',
    email: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = async e => {
    const { history } = this.props
    e.preventDefault()
    try {
      await profilesAPI.editProfile(this.state)
      history.push("/")
    } 
    catch (err) {
      alert('Error')
      console.log(err.message)
    }
  }

  isFormInvalid() {
    const { name, email} = this.state
    return !(name && email)
  }

  render() {
    const { name, email } = this.state
    return (
      <>
        <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-3xl sm:px-10">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Edit Profile</h2>
              </div>
              <form className="mt-12 space-y-6" onSubmit={this.handleSubmit} autoComplete="off">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Account Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="name"
                      name="name"
                      value={name}
                      type="text"
                      autoComplete="off"
                      required
                      onChange={this.handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      value={email}
                      type="email"
                      autoComplete="email"
                      required
                      onChange={this.handleChange}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <button
                    
                    disabled={this.isFormInvalid()}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Profile
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default ProfileEdit
