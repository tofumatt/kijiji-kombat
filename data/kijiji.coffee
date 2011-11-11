# Kijiji Hacks
# ============

# All the selectors we remove from the DOM, because they're just annoying ads.
AD_SELECTORS = [
    'iframe',
    'script + table',
    '#googsense',
    '#topAdSense',
    '.ahRht',
    '.sbBucket',
    '.viewadrightcol > div:not(.box)',
]

(($) ->
    # Unbind all click hijacking done on result rows. Allows users to open new
    # tabs via middle click, etc.
    $('#sbResultsListing *').unbind 'click mouseover'

    # Remove ads from the DOM.
    $(AD_SELECTORS.join(',')).remove()
)(window.jQuery) if window.jQuery != undefined
