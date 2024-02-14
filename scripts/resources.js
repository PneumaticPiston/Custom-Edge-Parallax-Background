var storedInfo = {
    storeageShortcuts: {
        storedShortcuts: function() {
            //Will return an array of objects with the name and url of websites
            return [];
        },
        storeShortcut: function(url, name) {

        },
        removeShortcut: function() {

        },
        displayShortcuts: function() {
            
        }
    },
    storedTheme: {
        isDark: true, //The stored value of the current theme
        setTheme: function() {
            if(storedInfo.storedTheme.isDark) {
                //Changes the styles of HTML elements
            }
        },
        switchTheme: function() {
            storedInfo.storedTheme.isDark = !storedInfo.storedTheme.isDark; //Switches the theme
            storedInfo.storedTheme.setTheme(); //Updates the styles of HTML elements to match the current theme
        }
    },
    storedEngine: {
        isGoogle: true, //Is a boolean variable that stores whether or not the user has selected bing or google
        setEngineTheme: function() {
            if(storedInfo.storedEngine.isGoogle) {
                //Will change the styles of several html elements
            }
        },
        switchEngine: function() {
            storedInfo.storedEngine.isGoogle = !storedInfo.storedEngine.isGoogle;
            storedInfo.storedEngine.switchEngine();
            //Changes the engine to a different one and then updates the elements
        }
    }
}

const storage = {
    getVariable: function() {
        console.log("Retrieving stored data");
        // Retrieve the stored information from Chrome storage
        return new Promise((resolve, reject) => {
            chrome.storage.sync.get('storedInfo', function(result) {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve(result.storedInfo);
                }
            });
        });
    },
    updateStoredVariable: function(data) {
        console.log("Updating stored data");
        // Update the stored information in Chrome storage
        return new Promise((resolve, reject) => {
            chrome.storage.sync.set({ 'storedInfo': data }, function() {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                } else {
                    resolve();
                }
            });
        });
    }
};