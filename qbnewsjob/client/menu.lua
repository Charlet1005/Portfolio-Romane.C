local QBCore = exports['qb-core']:GetCoreObject()
local PlayerJob = {}
local vehicleEquipment = {}

RegisterNetEvent('QBCore:Client:OnPlayerLoaded', function()
    PlayerJob = QBCore.Functions.GetPlayerData().job
end)

RegisterNetEvent('QBCore:Client:OnJobUpdate', function(JobInfo)
    PlayerJob = JobInfo
end)

RegisterCommand('news', function()
    PlayerJob = QBCore.Functions.GetPlayerData().job
    if PlayerJob and PlayerJob.name == 'reporter' then
        exports['qb-menu']:openMenu({
            {
                header = "Weazel News",
                isMenuHeader = true
            },
            {
                header = "Breaking News",
                txt = "Envoie une Breaking News à tout le monde",
                params = {
                    event = 'qb-newsjob:client:SendBreakingNews',
                }
            },
        })
    else
        QBCore.Functions.Notify("Tu n'es pas reporter !", "error")
    end
end)

-- Breaking News (fonctionnement propre)
RegisterNetEvent('qb-newsjob:client:SendBreakingNews', function()
    local dialog = exports['qb-input']:ShowInput({
        header = "Breaking News",
        submitText = "Envoyer",
        inputs = {
            {
                text = "Rédigez votre Breaking News ici...",
                name = "breakingnews",
                type = "text", -- ✅ On reste sur "text"
                isRequired = true,
                maxLength = 500, -- ✅ Augmente la limite de caractères
            }
        }
    })

    if dialog and dialog.breakingnews and dialog.breakingnews ~= "" then
        TriggerServerEvent('qb-newsjob:server:BroadcastBreakingNews', dialog.breakingnews)
    else
        QBCore.Functions.Notify("Le texte de la news est vide ou invalide.", "error")
    end
end)
