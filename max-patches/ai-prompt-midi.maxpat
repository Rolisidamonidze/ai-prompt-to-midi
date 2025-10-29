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
		"rect" : [ 59.0, 104.0, 800.0, 600.0 ],
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
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"assistshowspatchername" : 0,
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-1",
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 50.0, 50.0, 300.0, 20.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 10.0, 300.0, 20.0 ],
					"text" : "AI Prompt-to-MIDI Generator"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-2",
					"maxclass" : "textedit",
					"numinlets" : 1,
					"numoutlets" : 4,
					"outlettype" : [ "", "int", "", "" ],
					"patching_rect" : [ 50.0, 80.0, 400.0, 60.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 35.0, 400.0, 60.0 ],
					"text" : "Enter your musical prompt here..."
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-3",
					"maxclass" : "button",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "bang" ],
					"patching_rect" : [ 50.0, 150.0, 80.0, 30.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 10.0, 105.0, 80.0, 30.0 ],
					"text" : "Generate"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "dial",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 150.0, 150.0, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 110.0, 105.0, 40.0, 40.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Tempo",
							"parameter_mmax" : 200.0,
							"parameter_mmin" : 60.0,
							"parameter_shortname" : "Tempo",
							"parameter_type" : 0,
							"parameter_unitstyle" : 9
						}

					},
					"varname" : "tempo"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "dial",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "float" ],
					"patching_rect" : [ 200.0, 150.0, 40.0, 40.0 ],
					"presentation" : 1,
					"presentation_rect" : [ 160.0, 105.0, 40.0, 40.0 ],
					"parameter_enable" : 1,
					"saved_attribute_attributes" : 					{
						"valueof" : 						{
							"parameter_longname" : "Complexity",
							"parameter_mmax" : 1.0,
							"parameter_mmin" : 0.0,
							"parameter_shortname" : "Complex",
							"parameter_type" : 0,
							"parameter_unitstyle" : 1
						}

					},
					"varname" : "complexity"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-6",
					"maxclass" : "midiout",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 300.0, 300.0, 50.0, 30.0 ]
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "js",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 50.0, 220.0, 200.0, 50.0 ],
					"filename" : "prompt-to-midi.js"
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-2", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-7", 0 ],
					"source" : [ "obj-3", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-6", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
 ],
		"parameters" : 		{
			"obj-4" : [ "Tempo", "Tempo", 0 ],
			"obj-5" : [ "Complexity", "Complex", 0 ],
			"parameterbanks" : 			{

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
 ],
		"autosave" : 0
	}

}