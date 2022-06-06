import {job, jobInput, name, nameInput} from "../utils/variables";

export let statusEdit = () => {
  nameInput.value = name.textContent
  jobInput.value = job.textContent
}



export let statusSaveEdit = () => {
  name.textContent = nameInput.value
  job.textContent = jobInput.value
}
