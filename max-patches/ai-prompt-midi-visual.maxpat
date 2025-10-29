{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 5,
			"revision" : 5,
			"architecture" : "x64",
			"modernui" : 1
		},
		"classnamespace" : "box",
		"rect" : [ 34.0, 79.0, 1200.0, 800.0 ],
		"bglocked" : 0,
		"openinpresentation" : 1,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 550.0,
		"description" : "AI Prompt-to-MIDI Generator with Visual Synthesis",
		"digest" : "Transform text prompts into MIDI sequences and reactive visuals",
		"tags" : "ai, midi, generator, prompt, music, visual, synthesis",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"live.text" : [ "AI Prompt-to-MIDI + Visuals", "Generate MIDI and visuals from text" ],
		"live.line" : [ 5.0, 7.0 ],
		"live.numbox" : [ 5.0, 9.0 ],
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 15.0, 15.0, 500.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 10.0, 500.0, 20.0 ],
					"text" : "AI Prompt-to-MIDI Generator with Visual Synthesis",
					"fontsize" : 14.0,
					"fontface" : 1
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 15.0, 40.0, 500.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 30.0, 500.0, 18.0 ],
					"text" : "Enter a musical prompt to generate MIDI sequences and reactive visuals",
					"fontsize" : 11.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "textedit",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "int", "", "" ],
					"patching_rect" : [ 15.0, 70.0, 520.0, 60.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 55.0, 520.0, 60.0 ],
					"text" : "Enter your musical prompt here (e.g., 'energetic jazz with blue visuals')",
					"fontsize" : 11.0,
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Prompt Text",
							"parameter_shortname" : "Prompt",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ "Enter your musical prompt here" ]
						}

					},
					"varname" : "prompt_text"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "live.button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 15.0, 145.0, 80.0, 30.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 125.0, 80.0, 30.0 ],
					"text" : "Generate",
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Generate Button",
							"parameter_shortname" : "Generate",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1
						}

					},
					"varname" : "generate_btn"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "live.dial",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"patching_rect" : [ 110.0, 145.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 105.0, 125.0, 44.0, 48.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Tempo",
							"parameter_mmax" : 200.0,
							"parameter_mmin" : 60.0,
							"parameter_shortname" : "Tempo",
							"parameter_type" : 0,
							"parameter_unitstyle" : 9,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 120.0 ]
						}

					},
					"varname" : "tempo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "live.dial",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"patching_rect" : [ 165.0, 145.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 160.0, 125.0, 44.0, 48.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Complexity",
							"parameter_mmax" : 1.0,
							"parameter_mmin" : 0.0,
							"parameter_shortname" : "Complex",
							"parameter_type" : 0,
							"parameter_unitstyle" : 1,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 0.5 ]
						}

					},
					"varname" : "complexity"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "live.menu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "float" ],
					"patching_rect" : [ 220.0, 145.0, 70.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 215.0, 125.0, 70.0, 15.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" ],
							"parameter_longname" : "Key",
							"parameter_mmax" : 11,
							"parameter_shortname" : "Key",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 0.0 ]
						}

					},
					"varname" : "key"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-8",
					"maxclass" : "live.menu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "float" ],
					"patching_rect" : [ 300.0, 145.0, 80.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 295.0, 125.0, 80.0, 15.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "Major", "Minor", "Dorian", "Blues", "Pentatonic" ],
							"parameter_longname" : "Scale",
							"parameter_mmax" : 4,
							"parameter_shortname" : "Scale",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 0.0 ]
						}

					},
					"varname" : "scale"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "live.button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 15.0, 200.0, 80.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 180.0, 80.0, 25.0 ],
					"text" : "Start Visuals",
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Start Visuals",
							"parameter_shortname" : "StartVis",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1
						}

					},
					"varname" : "start_visuals"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-10",
					"maxclass" : "live.button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 105.0, 200.0, 80.0, 25.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 100.0, 180.0, 80.0, 25.0 ],
					"text" : "Stop Visuals",
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Stop Visuals",
							"parameter_shortname" : "StopVis",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1
						}

					},
					"varname" : "stop_visuals"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "live.menu",
					"numinlets" : 1,
					"numoutlets" : 3,
					"outlettype" : [ "", "", "float" ],
					"patching_rect" : [ 195.0, 200.0, 100.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 190.0, 180.0, 100.0, 15.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_enum" : [ "Particles", "Smoky Particles", "Flowing Waves", "Liquid Waves", "Geometric Shapes", "Floating Orbs", "Energy Bursts" ],
							"parameter_longname" : "Visual Style",
							"parameter_mmax" : 6,
							"parameter_shortname" : "VisStyle",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 0.0 ]
						}

					},
					"varname" : "visual_style"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-12",
					"maxclass" : "live.dial",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"patching_rect" : [ 305.0, 200.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 300.0, 180.0, 44.0, 48.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Visual Intensity",
							"parameter_mmax" : 1.0,
							"parameter_mmin" : 0.0,
							"parameter_shortname" : "VisInt",
							"parameter_type" : 0,
							"parameter_unitstyle" : 1,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 0.7 ]
						}

					},
					"varname" : "visual_intensity"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-13",
					"maxclass" : "live.dial",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "float" ],
					"patching_rect" : [ 360.0, 200.0, 44.0, 48.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 355.0, 180.0, 44.0, 48.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Music Reactivity",
							"parameter_mmax" : 1.0,
							"parameter_mmin" : 0.0,
							"parameter_shortname" : "React",
							"parameter_type" : 0,
							"parameter_unitstyle" : 1,
							"parameter_initial_enable" : 1,
							"parameter_initial" : [ 0.8 ]
						}

					},
					"varname" : "music_reactivity"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-14",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 110.0, 255.0, 44.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 105.0, 235.0, 44.0, 18.0 ],
					"text" : "Tempo",
					"fontsize" : 10.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-15",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 165.0, 255.0, 55.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 160.0, 235.0, 55.0, 18.0 ],
					"text" : "Complexity",
					"fontsize" : 10.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-16",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 220.0, 255.0, 30.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 215.0, 235.0, 30.0, 18.0 ],
					"text" : "Key",
					"fontsize" : 10.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-17",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 300.0, 255.0, 35.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 295.0, 235.0, 35.0, 18.0 ],
					"text" : "Scale",
					"fontsize" : 10.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-18",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 305.0, 255.0, 55.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 300.0, 235.0, 55.0, 18.0 ],
					"text" : "Intensity",
					"fontsize" : 10.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-19",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 360.0, 255.0, 55.0, 18.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 355.0, 235.0, 55.0, 18.0 ],
					"text" : "Reactivity",
					"fontsize" : 10.0
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-20",
					"maxclass" : "js",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 15.0, 290.0, 200.0, 50.0 ],
					"filename" : "prompt-to-midi.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-21",
					"maxclass" : "js",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 230.0, 290.0, 200.0, 50.0 ],
					"filename" : "visual-generator.js"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-22",
					"maxclass" : "midiout",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 15.0, 360.0, 50.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-23",
					"maxclass" : "live.text",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 490.0, 125.0, 44.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 485.0, 125.0, 44.0, 15.0 ],
					"text" : "Clear",
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Clear",
							"parameter_shortname" : "Clear",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1
						}

					},
					"varname" : "clear_btn"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-24",
					"maxclass" : "live.text",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 415.0, 200.0, 60.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 410.0, 180.0, 60.0, 15.0 ],
					"text" : "Export Frame",
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Export Frame",
							"parameter_shortname" : "Export",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1
						}

					},
					"varname" : "export_frame"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-25",
					"maxclass" : "live.text",
					"numinlets" : 1,
					"numoutlets" : 2,
					"outlettype" : [ "", "" ],
					"patching_rect" : [ 485.0, 200.0, 50.0, 15.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 480.0, 180.0, 50.0, 15.0 ],
					"text" : "Fullscreen",
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Fullscreen",
							"parameter_shortname" : "Full",
							"parameter_type" : 2,
							"parameter_initial_enable" : 1
						}

					},
					"varname" : "fullscreen_btn"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-6", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-20", 0 ],
					"source" : [ "obj-8", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-10", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-12", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-13", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-22", 0 ],
					"source" : [ "obj-20", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"midpoints" : [ 224.5, 285.0, 239.5, 285.0 ],
					"source" : [ "obj-20", 1 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-3", 0 ],
					"midpoints" : [ 499.5, 110.0, 24.5, 110.0 ],
					"source" : [ "obj-23", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-24", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-21", 0 ],
					"source" : [ "obj-25", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-3" : [ "Prompt Text", "Prompt", 0 ],
			"obj-4" : [ "Generate Button", "Generate", 0 ],
			"obj-5" : [ "Tempo", "Tempo", 0 ],
			"obj-6" : [ "Complexity", "Complex", 0 ],
			"obj-7" : [ "Key", "Key", 0 ],
			"obj-8" : [ "Scale", "Scale", 0 ],
			"obj-9" : [ "Start Visuals", "StartVis", 0 ],
			"obj-10" : [ "Stop Visuals", "StopVis", 0 ],
			"obj-11" : [ "Visual Style", "VisStyle", 0 ],
			"obj-12" : [ "Visual Intensity", "VisInt", 0 ],
			"obj-13" : [ "Music Reactivity", "React", 0 ],
			"obj-23" : [ "Clear", "Clear", 0 ],
			"obj-24" : [ "Export Frame", "Export", 0 ],
			"obj-25" : [ "Fullscreen", "Full", 0 ],
			"parameterbanks" : 			{
				"0" : 				{
					"index" : 0,
					"name" : "",
					"parameters" : [ "-", "-", "-", "-", "-", "-", "-", "-" ]
				}

			},
			"inherited_shortname" : 1
		},
		"dependency_cache" : [ 			{
				"name" : "prompt-to-midi.js",
				"bootpath" : "~/Desktop/ideator/js",
				"patcherrelativepath" : "../js",
				"type" : "TEXT",
				"implicit" : 1
			}
, 			{
				"name" : "visual-generator.js",
				"bootpath" : "~/Desktop/ideator/js",
				"patcherrelativepath" : "../js",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"amxd" : 		{
			"devicewidth" : 550.0
		}

	}

}