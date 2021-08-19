import * as tokenService from "./tokenService"
const BASE_URL = "/api/profiles/"

export function editProfile(formData) {
  return fetch(`${BASE_URL}edit`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json', Authorization: "Bearer " + tokenService.getToken()}),
    body: JSON.stringify(formData),
  })
  .then(res => res.json())
}

export function getUserProfile() {
  return fetch(`${BASE_URL}userProfile`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function getProfileDetails(id) {
  return fetch(`${BASE_URL}${id}`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function getAllProfiles() {
  return fetch(`${BASE_URL}`, 
  {headers: { Authorization: "Bearer " + tokenService.getToken() }},
  {mode: 'cors'})
  .then(res => res.json())
}

export function friend(id) {
  return fetch(
    `${BASE_URL}/friend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}

export function unfriend(id) {
  return fetch(
    `${BASE_URL}/unfriend/${id}`,
    {
      method: 'PATCH',
      headers: { Authorization: "Bearer " + tokenService.getToken() }
    },
    { mode: "cors" }
    ).then((res) => res.json())
}