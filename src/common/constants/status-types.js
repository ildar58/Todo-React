export const statusTypes = Object.freeze({
    ACTIVE: 'active',
    FAILED: 'failed',
    SUCCESS: 'success'
})

export const statusTypeLabels = Object.freeze({
    [statusTypes.ACTIVE]: 'Активные',
    [statusTypes.FAILED]: 'Отменённые',
    [statusTypes.SUCCESS]: 'Завершенные'
})
