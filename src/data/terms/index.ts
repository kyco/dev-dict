import { MISC } from '@/common'
import { interpolateValues } from '@/utils'

import aes from './aes'
import agile from './agile'
import ai from './ai'
import algolia from './algolia'
import alpine_js from './alpine_js'
import android_studio from './android_studio'
import angularjs from './angularjs'
import apache_tomcat from './apache_tomcat'
import asp_net from './asp_net'
import assembly from './assembly'
import aws from './aws'
import azure from './azure'
import azure_pipelines from './azure_pipelines'
import backbone from './backbone_js'
import bash from './bash'
import bdd from './bdd'
import beanstalk from './beanstalk'
import big_js from './big_js'
import biome from './biome'
import bitbucket_pipelines from './bitbucket_pipelines'
import bitcoin from './bitcoin'
import blockchain from './blockchain'
import bootstrap from './bootstrap'
import browserify from './browserify'
import browserstack from './browserstack'
import bugzilla from './bugzilla'
import c_sharp from './c_sharp'
import cakephp from './cakephp'
import chart_js from './chart_js'
import ci_cd from './ci_cd'
import circle_ci from './circle_ci'
import claude_code from './claude_code'
import clean_code from './clean_code'
import clojure from './clojure'
import cloudflare from './cloudflare'
import codacy from './codacy'
import codeigniter from './codeigniter'
import confluence from './confluence'
import contentful from './contentful'
import cplusplus from './cplusplus'
import craft_cms from './craft_cms'
import cs_cart from './cs_cart'
import css from './css'
import css_in_js from './css_in_js'
import css_modules from './css_modules'
import cucumber from './cucumber'
import cvs from './cvs'
import cypress from './cypress'
import dart from './dart'
import ddd from './ddd'
import digital_ocean from './digital_ocean'
import docker from './docker'
import docusaurus from './docusaurus'
import dot_net from './dot_net'
import dreamweaver from './dreamweaver'
import dynatrace from './dynatrace'
import e2e from './e2e'
import encryption from './encryption'
import erlang from './erlang'
import es_build from './es_build'
import eslint from './eslint'
import excel from './excel'
import express from './express'
import expression_engine from './expression_engine'
import f_sharp from './f_sharp'
import fhir from './fhir'
import figma from './figma'
import filezilla from './filezilla'
import firebase from './firebase'
import flamelink from './flamelink'
import flutter from './flutter'
import fortran from './fortran'
import foundation from './foundation'
import ftp from './ftp'
import gatsby from './gatsby'
import gcp from './gcp'
import git from './git'
import github from './github'
import github_actions from './github_actions'
import gitlab from './gitlab'
import gitlab_ci from './gitlab_ci'
import golang from './golang'
import google_analytics from './google_analytics'
import google_app_engine from './google_app_engine'
import google_business from './google_business'
import google_maps_api from './google_maps_api'
import graphql from './graphql'
import groovy from './groovy'
import grunt from './grunt'
import gulp from './gulp'
import handlebars from './handlebars'
import handsontable from './handsontable'
import haskell from './haskell'
import hetzner from './hetzner'
import hl7 from './hl7'
import html from './html'
import htmx from './htmx'
import i18n from './i18n'
import ionic from './ionic'
import jasmine from './jasmine'
import java from './java'
import javascript from './javascript'
import jenkins from './jenkins'
import jest from './jest'
import jira from './jira'
import jquery from './jquery'
import js from './js'
import kanban from './kanban'
import karma from './karma'
import kotlin from './kotlin'
import kubernetes from './kubernetes'
import laravel from './laravel'
import legacy_migration from './legacy_migration'
import lexical from './lexical'
import linux from './linux'
import lua from './lua'
import mac_os from './mac_os'
import mail_blaze from './mail_blaze'
import mailchimp from './mailchimp'
import make from './make'
import marionette from './marionette'
import matlab from './matlab'
import maven from './maven'
import meta_mask from './meta_mask'
import microsoft_sql_server from './microsoft_sql_server'
import mongo_db from './mongo_db'
import mui from './mui'
import mysql from './mysql'
import navicat from './navicat'
import nest_js from './nest_js'
import netbeans from './netbeans'
import netlify from './netlify'
import new_relic from './new_relic'
import next_js from './next_js'
import nexudus from './nexudus'
import nft from './nft'
import nginx from './nginx'
import nightsbridge from './nightsbridge'
import node from './node'
import node_js from './node_js'
import node_mailer from './node_mailer'
import nosql from './nosql'
import nx from './nx'
import objective_c from './objective_c'
import ocaml from './ocaml'
import okta from './okta'
import open_ai from './open_ai'
import optimizely from './optimizely'
import pathlogix from './pathlogix'
import perl from './perl'
import photoshop from './photoshop'
import php from './php'
import pnpm from './pnpm'
import polyglot_js from './polyglot_js'
import postgres from './postgres'
import posthog from './posthog'
import prettier from './prettier'
import putty from './putty'
import pwa from './pwa'
import python from './python'
import quickbooks from './quickbooks'
import r from './r'
import react from './react'
import react_hook_form from './react_hook_form'
import react_pdf from './react_pdf'
import react_testing_library from './react_testing_library'
import redux from './redux'
import reflow_soldering from './reflow_soldering'
import resend from './resend'
import rest_api from './rest_api'
import rsync from './rsync'
import ruby from './ruby'
import rust from './rust'
import sanity from './sanity'
import sass from './sass'
import scala from './scala'
import scrum from './scrum'
import sendgrid from './sendgrid'
import sentry from './sentry'
import service_workers from './service_workers'
import shadcn from './shadcn'
import smarty from './smarty'
import snyk from './snyk'
import socket_io from './socket_io'
import splunk from './splunk'
import sql from './sql'
import sql_lite from './sql_lite'
import ssh from './ssh'
import storybook from './storybook'
import stripe from './stripe'
import styled_components from './styled_components'
import sublime_text from './sublime_text'
import supabase from './supabase'
import svn from './svn'
import swift from './swift'
import tailwind from './tailwind'
import tanstack from './tanstack'
import tanstack_query from './tanstack_query'
import templ from './templ'
import terraform from './terraform'
import trello from './trello'
import twig from './twig'
import typescript from './typescript'
import typesense from './typesense'
import vercel from './vercel'
import vim from './vim'
import visual_basic from './visual_basic'
import vite from './vite'
import vitest from './vitest'
import vue_js from './vue_js'
import wdio from './wdio'
import web_forms from './web_forms'
import web_workers from './web_workers'
import web3 from './web3'
import webpack from './webpack'
import websockets from './websockets'
import windows from './windows'
import winscp from './winscp'
import wordpress from './wordpress'
import yarn from './yarn'
import zephyr from './zephyr'
import zig from './zig'
import zod from './zod'

export const RAW_TERMS = {
  [aes.id]: aes,
  [agile.id]: agile,
  [ai.id]: ai,
  [algolia.id]: algolia,
  [alpine_js.id]: alpine_js,
  [android_studio.id]: android_studio,
  [assembly.id]: assembly,
  [angularjs.id]: angularjs,
  [apache_tomcat.id]: apache_tomcat,
  [asp_net.id]: asp_net,
  [aws.id]: aws,
  [azure.id]: azure,
  [azure_pipelines.id]: azure_pipelines,
  [backbone.id]: backbone,
  [bash.id]: bash,
  [bdd.id]: bdd,
  [beanstalk.id]: beanstalk,
  [big_js.id]: big_js,
  [biome.id]: biome,
  [bitbucket_pipelines.id]: bitbucket_pipelines,
  [bitcoin.id]: bitcoin,
  [blockchain.id]: blockchain,
  [bootstrap.id]: bootstrap,
  [browserify.id]: browserify,
  [browserstack.id]: browserstack,
  [bugzilla.id]: bugzilla,
  [c_sharp.id]: c_sharp,
  [cakephp.id]: cakephp,
  [chart_js.id]: chart_js,
  [ci_cd.id]: ci_cd,
  [circle_ci.id]: circle_ci,
  [claude_code.id]: claude_code,
  [clean_code.id]: clean_code,
  [clojure.id]: clojure,
  [cloudflare.id]: cloudflare,
  [codacy.id]: codacy,
  [codeigniter.id]: codeigniter,
  [confluence.id]: confluence,
  [contentful.id]: contentful,
  [cplusplus.id]: cplusplus,
  [craft_cms.id]: craft_cms,
  [cs_cart.id]: cs_cart,
  [css.id]: css,
  [css_in_js.id]: css_in_js,
  [css_modules.id]: css_modules,
  [cucumber.id]: cucumber,
  [cvs.id]: cvs,
  [cypress.id]: cypress,
  [dart.id]: dart,
  [ddd.id]: ddd,
  [digital_ocean.id]: digital_ocean,
  [docker.id]: docker,
  [docusaurus.id]: docusaurus,
  [dot_net.id]: dot_net,
  [dreamweaver.id]: dreamweaver,
  [dynatrace.id]: dynatrace,
  [e2e.id]: e2e,
  [encryption.id]: encryption,
  [erlang.id]: erlang,
  [es_build.id]: es_build,
  [eslint.id]: eslint,
  [excel.id]: excel,
  [express.id]: express,
  [expression_engine.id]: expression_engine,
  [fhir.id]: fhir,
  [figma.id]: figma,
  [filezilla.id]: filezilla,
  [firebase.id]: firebase,
  [flamelink.id]: flamelink,
  [flutter.id]: flutter,
  [fortran.id]: fortran,
  [foundation.id]: foundation,
  [f_sharp.id]: f_sharp,
  [ftp.id]: ftp,
  [gatsby.id]: gatsby,
  [gcp.id]: gcp,
  [git.id]: git,
  [github.id]: github,
  [github_actions.id]: github_actions,
  [gitlab.id]: gitlab,
  [gitlab_ci.id]: gitlab_ci,
  [golang.id]: golang,
  [google_analytics.id]: google_analytics,
  [google_app_engine.id]: google_app_engine,
  [google_business.id]: google_business,
  [google_maps_api.id]: google_maps_api,
  [graphql.id]: graphql,
  [groovy.id]: groovy,
  [grunt.id]: grunt,
  [gulp.id]: gulp,
  [handlebars.id]: handlebars,
  [handsontable.id]: handsontable,
  [haskell.id]: haskell,
  [hetzner.id]: hetzner,
  [hl7.id]: hl7,
  [html.id]: html,
  [htmx.id]: htmx,
  [i18n.id]: i18n,
  [ionic.id]: ionic,
  [jasmine.id]: jasmine,
  [java.id]: java,
  [javascript.id]: javascript,
  [jenkins.id]: jenkins,
  [jest.id]: jest,
  [jira.id]: jira,
  [jquery.id]: jquery,
  [js.id]: js,
  [kanban.id]: kanban,
  [karma.id]: karma,
  [kotlin.id]: kotlin,
  [kubernetes.id]: kubernetes,
  [laravel.id]: laravel,
  [legacy_migration.id]: legacy_migration,
  [lexical.id]: lexical,
  [linux.id]: linux,
  [lua.id]: lua,
  [mac_os.id]: mac_os,
  [mail_blaze.id]: mail_blaze,
  [mailchimp.id]: mailchimp,
  [make.id]: make,
  [marionette.id]: marionette,
  [matlab.id]: matlab,
  [maven.id]: maven,
  [meta_mask.id]: meta_mask,
  [microsoft_sql_server.id]: microsoft_sql_server,
  [mongo_db.id]: mongo_db,
  [mui.id]: mui,
  [mysql.id]: mysql,
  [navicat.id]: navicat,
  [nest_js.id]: nest_js,
  [netbeans.id]: netbeans,
  [netlify.id]: netlify,
  [new_relic.id]: new_relic,
  [next_js.id]: next_js,
  [nexudus.id]: nexudus,
  [nft.id]: nft,
  [nginx.id]: nginx,
  [nightsbridge.id]: nightsbridge,
  [node.id]: node,
  [node_js.id]: node_js,
  [node_mailer.id]: node_mailer,
  [nosql.id]: nosql,
  [nx.id]: nx,
  [objective_c.id]: objective_c,
  [ocaml.id]: ocaml,
  [okta.id]: okta,
  [open_ai.id]: open_ai,
  [optimizely.id]: optimizely,
  [pathlogix.id]: pathlogix,
  [perl.id]: perl,
  [photoshop.id]: photoshop,
  [php.id]: php,
  [pnpm.id]: pnpm,
  [polyglot_js.id]: polyglot_js,
  [postgres.id]: postgres,
  [posthog.id]: posthog,
  [prettier.id]: prettier,
  [putty.id]: putty,
  [pwa.id]: pwa,
  [python.id]: python,
  [quickbooks.id]: quickbooks,
  [r.id]: r,
  [react.id]: react,
  [react_hook_form.id]: react_hook_form,
  [react_pdf.id]: react_pdf,
  [react_testing_library.id]: react_testing_library,
  [redux.id]: redux,
  [reflow_soldering.id]: reflow_soldering,
  [resend.id]: resend,
  [rest_api.id]: rest_api,
  [rsync.id]: rsync,
  [ruby.id]: ruby,
  [rust.id]: rust,
  [sanity.id]: sanity,
  [sass.id]: sass,
  [scala.id]: scala,
  [scrum.id]: scrum,
  [sendgrid.id]: sendgrid,
  [sentry.id]: sentry,
  [service_workers.id]: service_workers,
  [shadcn.id]: shadcn,
  [smarty.id]: smarty,
  [snyk.id]: snyk,
  [socket_io.id]: socket_io,
  [splunk.id]: splunk,
  [sql.id]: sql,
  [sql_lite.id]: sql_lite,
  [ssh.id]: ssh,
  [storybook.id]: storybook,
  [stripe.id]: stripe,
  [styled_components.id]: styled_components,
  [sublime_text.id]: sublime_text,
  [supabase.id]: supabase,
  [svn.id]: svn,
  [swift.id]: swift,
  [tailwind.id]: tailwind,
  [tanstack.id]: tanstack,
  [tanstack_query.id]: tanstack_query,
  [templ.id]: templ,
  [terraform.id]: terraform,
  [trello.id]: trello,
  [twig.id]: twig,
  [typescript.id]: typescript,
  [typesense.id]: typesense,
  [vercel.id]: vercel,
  [vim.id]: vim,
  [visual_basic.id]: visual_basic,
  [vite.id]: vite,
  [vitest.id]: vitest,
  [vue_js.id]: vue_js,
  [wdio.id]: wdio,
  [web3.id]: web3,
  [web_forms.id]: web_forms,
  [web_workers.id]: web_workers,
  [webpack.id]: webpack,
  [websockets.id]: websockets,
  [windows.id]: windows,
  [winscp.id]: winscp,
  [wordpress.id]: wordpress,
  [yarn.id]: yarn,
  [zephyr.id]: zephyr,
  [zig.id]: zig,
  [zod.id]: zod,
} as const

export const TERMS = interpolateValues({ obj: RAW_TERMS, keys: MISC.TERM_INTERPOLATION_KEYS, populateEmpty: false })
