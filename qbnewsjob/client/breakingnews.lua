QBCore = exports['qb-core']:GetCoreObject()

RegisterNetEvent('qb-newsjob:client:ShowBreakingNews', function(text)
    SendNUIMessage({
        action = "showBreakingNews",
        text = text
    })
end)


