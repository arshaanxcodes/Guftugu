// External script: https://ap.emergent.sh/static/array.js

window.addEventListener("error",function(e){if(e.error instanceof DOMException&&e.error.name==="DataCloneError"&&e.message&&e.message.includes("PerformanceServerTiming")){e.stopImmediatePropagation();e.preventDefault()}},true);

// External script: https://assets.emergent.sh/scripts/emergent-main.js

// External script: https://lucknow-cat-cafe.preview.emergentagent.com/static/js/bundle.js

if(window.self!==window.top){
  var s=document.createElement("script");s.src="/visual-edit-overlay.js";document.head.appendChild(s);
  window.tailwind=window.tailwind||{};tailwind.config={corePlugins:{preflight:false}};var t=document.createElement("script");t.src="https://cdn.tailwindcss.com";document.head.appendChild(t);
}

// External script: https://ap.emergent.sh/static/surveys.js?v=1.407.2

// External script: https://ap.emergent.sh/array/phc_DbsPb39SRc8z3EiQ6Dhj6ikv4H4rTKcht9d4sZSesceP/config.js

// External script: https://ap.emergent.sh/static/posthog-recorder.js?v=1.407.2

// External script: https://ap.emergent.sh/static/dead-clicks-autocapture.js?v=1.407.2

// External script: https://ap.emergent.sh/static/web-vitals.js?v=1.407.2

!(function (t, e) {
                var o, n, p, r;
                e.__SV ||
                    ((window.posthog = e),
                    (e._i = []),
                    (e.init = function (i, s, a) {
                        function g(t, e) {
                            var o = e.split(".");
                            2 == o.length && ((t = t[o[0]]), (e = o[1])),
                                (t[e] = function () {
                                    t.push(
                                        [e].concat(
                                            Array.prototype.slice.call(
                                                arguments,
                                                0,
                                            ),
                                        ),
                                    );
                                });
                        }
                        ((p = t.createElement("script")).type =
                            "text/javascript"),
                            (p.crossOrigin = "anonymous"),
                            (p.async = !0),
                            (p.src =
                                s.api_host.replace(
                                    ".i.posthog.com",
                                    "-assets.i.posthog.com",
                                ) + "/static/array.js"),
                            (r =
                                t.getElementsByTagName(
                                    "script",
                                )[0]).parentNode.insertBefore(p, r);
                        var u = e;
                        for (
                            void 0 !== a ? (u = e[a] = []) : (a = "posthog"),
                                u.people = u.people || [],
                                u.toString = function (t) {
                                    var e = "posthog";
                                    return (
                                        "posthog" !== a && (e += "." + a),
                                        t || (e += " (stub)"),
                                        e
                                    );
                                },
                                u.people.toString = function () {
                                    return u.toString(1) + ".people (stub)";
                                },
                                o =
                                    "init me ws ys ps bs capture je Di ks register register_once register_for_session unregister unregister_for_session Ps getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty Es $s createPersonProfile Is opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing Ss debug xs getPageViewId captureTraceFeedback captureTraceMetric".split(
                                        " ",
                                    ),
                                n = 0;
                            n < o.length;
                            n++
                        )
                            g(u, o[n]);
                        e._i.push([i, s, a]);
                    }),
                    (e.__SV = 1));
            })(document, window.posthog || []);
            posthog.init("phc_DbsPb39SRc8z3EiQ6Dhj6ikv4H4rTKcht9d4sZSesceP", {
                api_host: "https://ap.emergent.sh",
                person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well,
                session_recording: {
                    recordCrossOriginIframes: true,
                    capturePerformance: false,
                },
            });

const fab = document.getElementById("fab");
const actions = document.getElementById("actions");

fab.addEventListener("click",()=>{
    actions.classList.toggle("open");
    fab.classList.toggle("active");
});
// External script: https://static.cloudflareinsights.com/beacon.min.js/v4513226cdae34746b4dedf0b4dfa099e1781791509496
