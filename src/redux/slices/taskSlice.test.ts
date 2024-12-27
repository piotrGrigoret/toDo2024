import taskReducer, { 
    initialState, 
    setTaskName, 
    setTaskDescription, 
    setIsCheked, 
    addTask, 
    filterTasks, 
    FilterStatus 
  } from './taskSlice';

import { nanoid } from 'nanoid';

jest.mock('nanoid', () => ({
    nanoid: jest.fn(() => 'mocked-id')
  }));

describe('registration reducer', () => {

    it('should handle initial state', () =>{
        expect(taskReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });    
      
    it('should handle setTaskName', () => {
        const newState = taskReducer(initialState, setTaskName('Test Task'));
        expect(newState.task.name).toBe('Test Task');
    });

    it('should handle setTaskDescription', () => {
        const newState = taskReducer(initialState, setTaskDescription('Test Description'));
        expect(newState.task.description).toBe('Test Description');
    });

    it('should handle setIsChecked', () => {
        const initialStateWithTasks = {
          ...initialState,
          tasks: [
            {
              id: 'task-1',
              name: 'Task 1',
              description: 'Description 1',
              isChecked: false
            }
          ],
          allTasks: [
            {
              id: 'task-1',
              name: 'Task 1',
              description: 'Description 1',
              isChecked: false
            }
          ]
        };
    
        const newState = taskReducer(initialStateWithTasks, setIsCheked('task-1'));
        expect(newState.tasks[0].isChecked).toBe(true);
        expect(newState.allTasks[0].isChecked).toBe(true);
      });


  it('should handle addTask', () => {
    const initialStateForAddTask = {
      ...initialState,
      task: {
        id: '',
        name: 'New Task',
        description: 'New Description',
        isChecked: false
      }
    };

    const newState = taskReducer(initialStateForAddTask, addTask());

    expect(newState.allTasks.length).toBe(2);
    // expect(newState.allTasks[1]).toEqual({
    //   id: 'mocked-id',
    //   name: 'New Task',
    //   description: 'New Description',
    //   isChecked: false
    // });
    expect(newState.task.name).toBe('');
    expect(newState.task.description).toBe('');
  });

      it('should handle filterTasks with "all"', () => {
        const newState = taskReducer(initialState, filterTasks('all'));
        expect(newState.tasks).toEqual(initialState.allTasks);
      });

      it('should handle filterTasks with "active"', () => {
        const initialStateWithMixedTasks = {
          ...initialState,
          allTasks: [
            { id: 'task-1', name: 'Task 1', description: 'Description 1', isChecked: false },
            { id: 'task-2', name: 'Task 2', description: 'Description 2', isChecked: true }
          ]
        };
    
        const newState = taskReducer(initialStateWithMixedTasks, filterTasks('active'));
        expect(newState.tasks).toEqual([
          { id: 'task-1', name: 'Task 1', description: 'Description 1', isChecked: false }
        ]);
      });

      it('should handle filterTasks with "completed"', () => {
        const initialStateWithMixedTasks = {
          ...initialState,
          allTasks: [
            { id: 'task-1', name: 'Task 1', description: 'Description 1', isChecked: false },
            { id: 'task-2', name: 'Task 2', description: 'Description 2', isChecked: true }
          ]
        };
    
        const newState = taskReducer(initialStateWithMixedTasks, filterTasks('completed'));
        expect(newState.tasks).toEqual([
          { id: 'task-2', name: 'Task 2', description: 'Description 2', isChecked: true }
        ]);
      });

      it('should handle filterTasks with "clear"', () => {
        const initialStateWithMixedTasks = {
          ...initialState,
          allTasks: [
            { id: 'task-1', name: 'Task 1', description: 'Description 1', isChecked: false },
            { id: 'task-2', name: 'Task 2', description: 'Description 2', isChecked: true }
          ]
        };
    
        const newState = taskReducer(initialStateWithMixedTasks, filterTasks('clear'));
        expect(newState.tasks).toEqual([
          { id: 'task-1', name: 'Task 1', description: 'Description 1', isChecked: false }
        ]);
        expect(newState.allTasks).toEqual([
          { id: 'task-1', name: 'Task 1', description: 'Description 1', isChecked: false }
        ]);
      });   
})