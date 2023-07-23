/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { projects } from '../assets/data/project';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [initialProjects, setInitialProjects] = useState(projects);
  const [filterKey, setFilterKey] = useState('')
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    if (filterKey) {
      setFilteredProjects(projects.filter((project) => project.category === filterKey))
    }
  }, [filterKey])


  return (
    <AppContext.Provider value={{
      filterKey, initialProjects, filteredProjects, setFilterKey, setInitialProjects
    }}>
      {children}
    </AppContext.Provider>
  )
}