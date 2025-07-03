local QBCore = exports['qb-core']:GetCoreObject()
local lastBroadcast = {}

RegisterNetEvent('qb-newsjob:server:BroadcastBreakingNews', function(text)
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)

    if not Player or Player.PlayerData.job.name ~= 'reporter' then
        TriggerClientEvent("QBCore:Notify", src, "Tu n'es pas journaliste !", "error")
        return
    end

    -- Vérifie le cooldown
    if lastBroadcast[src] and os.time() - lastBroadcast[src] < 30 then
        TriggerClientEvent("QBCore:Notify", src, "Vous devez attendre avant d'envoyer une autre news.", "error")
        return
    end

    -- Vérifie que le texte n'est pas vide
    if not text or text == "" then
        TriggerClientEvent("QBCore:Notify", src, "Texte obligatoire.", "error")
        return
    end

    if type(text) ~= "string" or text == "" then
        TriggerClientEvent("QBCore:Notify", src, "Erreur : texte non valide.", "error")
        return
    end

    TriggerClientEvent('qb-newsjob:client:ShowBreakingNews', -1, text)

    -- Stocke le cooldown
    lastBroadcast[src] = os.time()
end)
